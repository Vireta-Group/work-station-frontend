import { useEffect, useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import JobTable from "./JobTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchMembersByLeader } from "../../../features/membersByLeader/membersByLeaderSlice";

export default function WorkDistributionForm() {
  const members = useSelector((state) => state.membersByLeader.items);
  const dispatch = useDispatch();
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    work_title: "",
    work_desc: "",
    work_expire_date: "",
    work_date: today,
    work_emp_id: "",
  });

  console.log(members);

  useEffect(() => {
    if (members.length <= 0) {
      dispatch(fetchMembersByLeader());
    }
  }, [members, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      work_title: "",
      work_desc: "",
      work_expire_date: "",
      work_emp_id: "",
    });
  };

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
    <div className="flex flex-col justify-center w-[100%]">
      <div className="p-6 bg-gray-800 rounded-lg h-[100%] max-w-[700px] mx-auto mt-10">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">
          Work Distribution Form
        </h2>
        <form onSubmit={handleSubmit}>
          <FormControl sx={{ m: 2, width: "45%" }}>
            <TextField
              label="Today's Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              InputProps={{ readOnly: true }}
              sx={muiInputStyles}
              value={today}
            />
          </FormControl>

          <FormControl sx={{ m: 2, width: "45%" }}>
            <TextField
              label="Job Title"
              name="work_title"
              value={formData.work_title}
              onChange={handleChange}
              required
              sx={muiInputStyles}
            />
          </FormControl>

          <FormControl fullWidth className="mb-4" sx={{ my: 2 }}>
            <TextField
              label="Job Description"
              name=" work_desc"
              value={formData.work_desc}
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
              name="work_expire_date"
              type="date"
              value={formData.work_expire_date}
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
              name="  work_emp_id"
              value={formData.work_emp_id}
              onChange={handleChange}
              required
              sx={{
                ...muiInputStyles,
                "& .MuiSelect-icon": {
                  color: "white",
                },
              }}
            >
              {members?.map((user) => (
                <MenuItem key={user.empId} value={user.empId}>
                  {user.empName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="flex justify-center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                width: "200px",
                my: 4,
                alignSelf: "center",
                height: "50px",
              }}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
      <JobTable />
    </div>
  );
}
