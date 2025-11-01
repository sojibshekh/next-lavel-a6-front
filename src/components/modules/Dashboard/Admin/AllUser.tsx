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
import { useNavigate } from 'react-router';
type UsersResponse = {
  data: UserInfo[];
};



const AllUser = () => {

   const { data: users} = useAllUsersQuery() as { data: UsersResponse | undefined };

     const navigate = useNavigate();

 
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
                         <TableCell>
                            {user?.isActive === "active"
                              ? "Active"
                              : user?.isActive === "inactive"
                              ? "Inactive"
                              :  user?.isActive === "blocked"? "Blocked": ""}
                          </TableCell>

                        <TableCell className="">
                           <Button onClick={() => navigate(`/dashboard/users/${user._id}/edit`)} variant="ghost" className='bg-yellow-500 hover:bg-yellow-600 text-white w-full sm:w-auto' size="sm">Update User</Button>
                         

                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            
        </div>
    );
};

export default AllUser;
