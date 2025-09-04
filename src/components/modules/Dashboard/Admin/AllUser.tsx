import { useAllUsersQuery } from '@/redux/features/auth/user.api';
import type { UserInfo } from '@/redux/features/auth/wallte.api';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button';



const AllUser = () => {

   const { data: users, isLoading, error } = useAllUsersQuery();

   console.log("API response:", users);

if (isLoading) return <p>Loading...</p>;
if (error) return <p>Error loading users</p>;

    console.log(users);
    return (
        <div className='p-4'>
            <h3>all users</h3>
            
            <Table>
                <TableCaption>A list of all Users.</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead className="">User Name</TableHead>
                    <TableHead>User Role</TableHead>
                    <TableHead>User Email</TableHead>
                    <TableHead>User Status</TableHead>
                    <TableHead className="">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users?.data?.map((user: UserInfo) => (
                    <TableRow key={user._id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>{user.email}</TableCell>
                         <TableCell>{user?.isActive? "Active" : user.isActive?"Inactive" :""}</TableCell>
                        <TableCell className="">
                           <Button variant="ghost" size="sm">Edit User</Button>
                           <Button variant="ghost" size="sm" className='text-red-600'>Delete User</Button>

                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            
        </div>
    );
};

export default AllUser;