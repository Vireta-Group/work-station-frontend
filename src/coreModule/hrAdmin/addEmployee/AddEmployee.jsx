import InputGroup from "./InputGroup";

const AddEmployee = () => {
  return (
    <div className="dark:bg-gray-800 ">
      <InputGroup />
    </div>
  );
};

export default AddEmployee;

// import React from "react";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   TextField,
//   InputAdornment,
//   MenuItem,
//   Select,
//   FormControl,
//   InputLabel,
//   Box,
//   Button,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   FormLabel,
// } from "@mui/material";
// import {
//   Email,
//   Phone,
//   Person,
//   Badge,
//   CalendarToday,
//   Home,
//   School,
//   AttachMoney,
//   Apartment,
//   Work,
//   Bloodtype,
// } from "@mui/icons-material";

// export default function EmployeeFormCard() {
//   return (
//     <div className="dark:bg-gray-800">
//       <Card
//         className="dark:bg-gray-800"
//         sx={{ maxWidth: 600, mx: "auto", mt: 5, p: 2 }}
//       >
//         <CardHeader title="Employee Details" />
//         <CardContent>
//           <Box sx={{ display: "grid", gap: 3 }}>
//             {/* Full Name */}
//             <TextField
//               label="Full Name"
//               placeholder="John Doe"
//               fullWidth
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Person />
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             {/* Father Name */}
//             <TextField
//               label="Father Name"
//               placeholder="Mr. Doe"
//               fullWidth
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Person />
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             {/* Mother Name */}
//             <TextField
//               label="Mother Name"
//               placeholder="Mrs. Doe"
//               fullWidth
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Person />
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             {/* NID */}
//             <TextField
//               label="NID"
//               placeholder="1234567890"
//               fullWidth
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Badge />
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             {/* Date of Birth */}
//             <TextField
//               label="Date of Birth"
//               type="date"
//               InputLabelProps={{ shrink: true }}
//               fullWidth
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <CalendarToday />
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             {/* Local Address */}
//             <TextField
//               label="Local Address"
//               placeholder="123 Street, City"
//               fullWidth
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Home />
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             {/* Permanent Address */}
//             <TextField
//               label="Permanent Address"
//               placeholder="Village, City"
//               fullWidth
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Home />
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             {/* Last Education */}
//             <TextField
//               label="Last Education"
//               placeholder="BSc in CSE"
//               fullWidth
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <School />
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             {/* Salary */}
//             <TextField
//               label="Salary"
//               placeholder="50000"
//               fullWidth
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <AttachMoney />
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             {/* Department */}
//             <TextField
//               label="Department"
//               placeholder="IT"
//               fullWidth
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Apartment />
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             {/* Designation */}
//             <TextField
//               label="Designation"
//               placeholder="Software Engineer"
//               fullWidth
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Work />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             {/* Designation */}
//             <TextField
//               label="Designation"
//               placeholder="Software Engineer"
//               fullWidth
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Work />
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             {/* Gender */}
//             <FormControl>
//               <FormLabel>Gender</FormLabel>
//               <RadioGroup row>
//                 <FormControlLabel
//                   value="male"
//                   control={<Radio />}
//                   label="Male"
//                 />
//                 <FormControlLabel
//                   value="female"
//                   control={<Radio />}
//                   label="Female"
//                 />
//                 <FormControlLabel
//                   value="other"
//                   control={<Radio />}
//                   label="Other"
//                 />
//               </RadioGroup>
//             </FormControl>

//             {/* Blood Group */}
//             <TextField
//               select
//               label="Blood Group"
//               fullWidth
//               defaultValue=""
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Bloodtype />
//                   </InputAdornment>
//                 ),
//               }}
//             >
//               <MenuItem value="A+">A+</MenuItem>
//               <MenuItem value="A-">A-</MenuItem>
//               <MenuItem value="B+">B+</MenuItem>
//               <MenuItem value="B-">B-</MenuItem>
//               <MenuItem value="O+">O+</MenuItem>
//               <MenuItem value="O-">O-</MenuItem>
//               <MenuItem value="AB+">AB+</MenuItem>
//               <MenuItem value="AB-">AB-</MenuItem>
//             </TextField>

//             {/* Join Date */}
//             <TextField
//               label="Join Date"
//               type="date"
//               InputLabelProps={{ shrink: true }}
//               fullWidth
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <CalendarToday />
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             {/* Working Type */}
//             <TextField select label="Working Type" fullWidth defaultValue="">
//               <MenuItem value="remote">Remote</MenuItem>
//               <MenuItem value="physical">Physical</MenuItem>
//             </TextField>
//             {/* Send for Approval Button */}
//             <Button variant="contained" color="primary" sx={{ mt: 2 }}>
//               Send for Approval
//             </Button>
//           </Box>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
