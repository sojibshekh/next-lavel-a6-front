
import { Outlet } from 'react-router';

const AdminLayout = () => {
    return (
        <div>
            <h3>admin</h3>
            <Outlet></Outlet>
        </div>
    );
};

export default AdminLayout;