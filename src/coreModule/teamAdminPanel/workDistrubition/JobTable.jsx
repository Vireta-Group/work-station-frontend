import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

export default function UserJobTable({ onEdit }) {
  // Sample data for the table
  const jobs = [
    {
      id: 1,
      userName: "John Doe",
      jobTitle: "Fix Dashboard Bug",
      status: "In Progress",
      expireDate: "2025-08-25",
    },
    {
      id: 2,
      userName: "Jane Smith",
      jobTitle: "Update Landing Page",
      status: "Completed",
      expireDate: "2025-08-20",
    },
    {
      id: 3,
      userName: "Peter Jones",
      jobTitle: "Write API Documentation",
      status: "Pending",
      expireDate: "2025-09-01",
    },
    {
      id: 4,
      userName: "John Doe",
      jobTitle: "Database Migration",
      status: "In Progress",
      expireDate: "2025-08-28",
    },
    {
      id: 5,
      userName: "Jane Smith",
      jobTitle: "UI/UX Review",
      status: "Pending",
      expireDate: "2025-09-10",
    },
  ];

  // Function to determine status color
  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "text-yellow-400";
      case "Completed":
        return "text-green-400";
      case "Pending":
        return "text-gray-400";
      default:
        return "text-white";
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-md w-[700px] m-50 mt-10 self-center">
      <h2 className="text-2xl font-bold text-white mb-4 text-center">
        User Job Overview
      </h2>
      <TableContainer component={Paper} className="shadow-md">
        <Table
          sx={{ minWidth: 650 }}
          aria-label="user job table"
          className="bg-gray-700"
        >
          <TableHead>
            <TableRow>
              <TableCell className="font-bold text-white">User Name</TableCell>
              <TableCell className="font-bold text-white">Job Title</TableCell>
              <TableCell className="font-bold text-white">Status</TableCell>
              <TableCell className="font-bold text-white">
                Expire Date
              </TableCell>
              <TableCell className="font-bold text-white text-right">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs.map((job) => (
              <TableRow key={job.id}>
                <TableCell sx={{ color: "white" }}>{job.userName}</TableCell>
                <TableCell sx={{ color: "white" }}>{job.jobTitle}</TableCell>
                <TableCell className={`${getStatusColor(job.status)}`}>
                  {job.status}
                </TableCell>
                <TableCell sx={{ color: "white" }}>{job.expireDate}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => onEdit(job.id)}
                    sx={{ color: "white", borderColor: "white" }}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
