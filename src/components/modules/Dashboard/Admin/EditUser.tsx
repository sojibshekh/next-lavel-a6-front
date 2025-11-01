/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect } from "react";
import { useAllUsersQuery, useUpdateUserByAdminMutation } from "@/redux/features/auth/user.api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router";
import type { UserInfo } from "@/redux/features/auth/auth.api";


type UsersResponse = {
  data: UserInfo[];
};

const EditUser = () => {
  const { id } = useParams(); // get user id from URL
  const navigate = useNavigate();

   const { data: usersResponse, refetch } = useAllUsersQuery();
    const users = usersResponse as UsersResponse | undefined;

  const [updateUserByAdmin] = useUpdateUserByAdminMutation();

  // find the user from cache
  const user = users?.data?.find((u: any) => u._id === id);

  console.log("Editing user:", user);

  const [formData, setFormData] = useState({ name: "", email: "", role: "",isActive:"" });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        role: user.role || "",
        isActive: user.isActive || "",
      });
    }
  }, [user]);

  const handleUpdate = async () => {
    console.log("Form Data on Update:", formData);

    try {
        console.log("Updating user with data:", formData);
      await updateUserByAdmin({ id, body: formData }).unwrap();
      toast.success("User updated successfully!");
      await refetch(); // ✅ refresh list

      navigate("/dashboard/users"); // redirect back
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to update user");
    }
  };

  if (!user) return <p>User not found</p>;

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Edit User</h2>
      <div className="space-y-4">
        <Input
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Input
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Input
          placeholder="Role"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        />
        <select
          className="w-full border rounded-md p-2"
          value={formData.isActive}
          onChange={(e) => setFormData({ ...formData, isActive: e.target.value })}
        >
          <option value="">Select Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="blocked">Blocked</option>
        </select>

        <div className="flex gap-2">
          <Button onClick={handleUpdate}>Update</Button>
          <Button variant="outline" onClick={() => navigate(-1)}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
