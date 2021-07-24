import { Link } from 'react-router-dom';

const AdminView = props => {
	return (
		<>
			<h2>Main View</h2>
			<Link to='/auth'>Auth View</Link>
		</>
	);
};

export default AdminView;
