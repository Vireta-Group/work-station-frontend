import { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export default function EWorkDetail() {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    userName: "",
  });

  const [filteredJobs, setFilteredJobs] = useState([]);

  const allWorkDetails = [
    {
      id: 1,
      userName: "John Doe",
      startDate: "2025-08-01",
      endDate: "2025-08-15",
      jobTitle: "Fix Dashboard Bug",
      status: "Complete",
    },
    {
      id: 2,
      userName: "Jane Smith",
      startDate: "2025-08-05",
      endDate: "2025-08-20",
      jobTitle: "Update Landing Page",
      status: "Continuous",
    },
    {
      id: 3,
      userName: "Peter Jones",
      startDate: "2025-08-10",
      endDate: "2025-08-25",
      jobTitle: "Write API Documentation",
      status: "Start",
    },
    {
      id: 4,
      userName: "John Doe",
      startDate: "2025-08-20",
      endDate: "2025-08-30",
      jobTitle: "Database Migration",
      status: "Continuous",
    },
    {
      id: 5,
      userName: "Jane Smith",
      startDate: "2025-08-22",
      endDate: "2025-08-22",
      jobTitle: "UI/UX Review",
      status: "Expire",
    },
    {
      id: 6,
      userName: "John Doe",
      startDate: "2025-07-25",
      endDate: "2025-08-05",
      jobTitle: "Server Maintenance",
      status: "Complete",
    },
    {
      id: 7,
      userName: "Peter Jones",
      startDate: "2025-08-22",
      endDate: "2025-08-28",
      jobTitle: "Deploy New Feature",
      status: "Start",
    },
  ];

  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Peter Jones" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const { startDate, endDate, userName } = formData;

    const filtered = allWorkDetails.filter((job) => {
      const jobDate = new Date(job.endDate);
      const searchEndDate = new Date(endDate);
      const searchStartDate = new Date(startDate);

      const inDateRange =
        (!startDate || jobDate >= searchStartDate) &&
        (!endDate || jobDate <= searchEndDate);
      const matchesUser =
        !userName ||
        job.userName === users.find((u) => u.id === userName)?.name;

      return inDateRange && matchesUser;
    });

    setFilteredJobs(filtered);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "complete":
        return "text-green-400";
      case "continuous":
      case "start":
        return "text-yellow-400";
      case "expire":
        return "text-red-400";
      default:
        return "text-white";
    }
  };

  const handleView = (jobId) => {
    console.log(`View button clicked for job ID: ${jobId}`);
  };

  return (
    <div className=" bg-gray-900 w-[800px] text-white p-4 md:p-8 h-[100%]">
      <div className="p-6 bg-gray-800 rounded-lg shadow-md border-2 border-white mb-8">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">
          Employee Work Details
        </h2>
        <form
          onSubmit={handleSearch}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end"
        >
          <FormControl fullWidth>
            <TextField
              label="Start Date"
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              sx={{
                "& .MuiInputBase-input": { color: "white" },
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiInputLabel-root.Mui-focused": { color: "white" },
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
              }}
            />
          </FormControl>

          <FormControl fullWidth>
            <TextField
              label="End Date"
              name="endDate"
              type="date"
              value={formData.endDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              sx={{
                "& .MuiInputBase-input": { color: "white" },
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiInputLabel-root.Mui-focused": { color: "white" },
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
              }}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel sx={{ color: "white" }}>User Name</InputLabel>
            <Select
              label="User Name"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              sx={{
                "& .MuiInputBase-input": { color: "white" },
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "& .MuiSelect-icon": { color: "white" },
              }}
            >
              <MenuItem value="">
                <em>All Users</em>
              </MenuItem>
              {users.map((user) => (
                <MenuItem key={user.id} value={user.id} sx={{ color: "black" }}>
                  {user.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-full"
            sx={{ height: "56px" }} // Match height of text fields
          >
            Search
          </Button>
        </form>
      </div>

      <div className="p-6 bg-gray-800 rounded-lg shadow-md border-2 border-white">
        <h3 className="text-xl font-bold text-white mb-4">Work Details</h3>
        <TableContainer component={Paper} className="shadow-md">
          <Table
            sx={{ minWidth: 650 }}
            aria-label="work details table"
            className="bg-gray-700"
          >
            <TableHead>
              <TableRow>
                <TableCell className="font-bold text-white">
                  Start Date
                </TableCell>
                <TableCell className="font-bold text-white">End Date</TableCell>
                <TableCell className="font-bold text-white">
                  Job Title
                </TableCell>
                <TableCell className="font-bold text-white">Status</TableCell>
                <TableCell className="font-bold text-white text-right">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell sx={{ color: "white" }}>
                      {job.startDate}
                    </TableCell>
                    <TableCell sx={{ color: "white" }}>{job.endDate}</TableCell>
                    <TableCell sx={{ color: "white" }}>
                      {job.jobTitle}
                    </TableCell>
                    <TableCell className={getStatusColor(job.status)}>
                      {job.status}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => handleView(job.id)}
                        sx={{ color: "white", borderColor: "white" }}
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="text-center text-gray-400 py-8"
                  >
                    {formData.startDate || formData.endDate || formData.userName
                      ? "No work details found for the selected criteria."
                      : "Use the form above to search for work details."}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
