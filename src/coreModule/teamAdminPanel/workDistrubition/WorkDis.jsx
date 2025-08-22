import { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

export default function WorkDistributionForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDescription: "",
    expirationDate: "",
    assignedUser: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof formData.expirationDate);
    setFormData({
      jobTitle: "",
      jobDescription: "",
      expirationDate: "",
      assignedUser: "",
    });
  };

  const today = new Date().toISOString().split("T")[0];

  const muiInputStyles = {
    "& .MuiInputBase-input": {
      color: "white",
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white !important",
    },
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg h-[100%] max-w-[700px] mx-auto mt-10">
      <h2 className="text-2xl font-bold text-white mb-4 text-center">
        Work Distribution Form
      </h2>
      <form onSubmit={handleSubmit}>
        <FormControl
          label="Today's Date"
          type="date"
          value={today}
          InputLabelProps={{ shrink: true }}
          InputProps={{ readOnly: true }}
          sx={{ m: 2, width: "45%" }}
        >
          <TextField value={today} sx={muiInputStyles} />
        </FormControl>

        <FormControl sx={{ m: 2, width: "45%" }}>
          <TextField
            label="Job Title"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
            sx={muiInputStyles}
          />
        </FormControl>

        <FormControl fullWidth className="mb-4" sx={{ my: 2 }}>
          <TextField
            label="Job Description"
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            multiline
            rows={4}
            required
            fullWidth
            sx={muiInputStyles}
          />
        </FormControl>

        <FormControl fullWidth className="mb-4" sx={{ my: 2 }}>
          <TextField
            label="Expiration Date"
            name="expirationDate"
            type="date"
            value={formData.expirationDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            required
            fullWidth
            sx={muiInputStyles}
          />
        </FormControl>

        <FormControl fullWidth sx={{ my: 2 }}>
          <InputLabel sx={{ color: "white" }}>Assign User</InputLabel>
          <Select
            label="Assign User"
            name="assignedUser"
            value={formData.assignedUser}
            onChange={handleChange}
            required
            sx={{
              ...muiInputStyles,
              "& .MuiSelect-icon": {
                color: "white",
              },
            }}
          >
            {users.map((user) => (
              <MenuItem key={user.id} value={user.id} sx={{ color: "white" }}>
                {user.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className="flex justify-center">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: "200px", my: 4, alignSelf: "center", height: "50px" }}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
