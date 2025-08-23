import {
  Button,
  Card,
  CardContent,
  TextField,
  Checkbox,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Select,
  MenuItem,
  InputLabel,
  Typography,
} from "@mui/material";

import {
  Person as User,
  Home,
  Work as Briefcase,
  School as GraduationCap,
  Send,
  Lightbulb,
  LocationOn as MapPin,
  ChevronRight,
  RotateLeft as RotateCcw,
} from "@mui/icons-material";
import { useState } from "react";

export default function AddEmployee() {
  const [sameAsLocal, setSameAsLocal] = useState(false);

  const handleReset = () => {
    console.log("Form reset clicked");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Add New Employee</h1>
          <p className="mt-2 text-sm text-gray-600">
            Enter employee information to create a new employee record in the
            system.
          </p>
        </div>

        {/* Employee Form */}
        <Card className="shadow-lg">
          <CardContent>
            <form onSubmit={handleSubmit}>
              {/* Personal Information Section */}
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <User className="text-primary mr-3" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Personal Information
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <TextField label="Full Name" required fullWidth />
                  <TextField label="Father's Name" required fullWidth />
                  <TextField label="Mother's Name" required fullWidth />
                  <TextField label="National ID (NID)" required fullWidth />
                  <TextField
                    type="date"
                    label="Date of Birth"
                    InputLabelProps={{ shrink: true }}
                    required
                    fullWidth
                  />

                  <FormControl>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup row>
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel>Blood Group</InputLabel>
                    <Select>
                      <MenuItem value="A+">A+</MenuItem>
                      <MenuItem value="A-">A-</MenuItem>
                      <MenuItem value="B+">B+</MenuItem>
                      <MenuItem value="B-">B-</MenuItem>
                      <MenuItem value="AB+">AB+</MenuItem>
                      <MenuItem value="AB-">AB-</MenuItem>
                      <MenuItem value="O+">O+</MenuItem>
                      <MenuItem value="O-">O-</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>

              {/* Contact Information Section */}
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <MapPin className="text-primary mr-3" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Contact Information
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <TextField
                    label="Local Address"
                    required
                    fullWidth
                    multiline
                    rows={4}
                  />
                  <div>
                    <TextField
                      label="Permanent Address"
                      required
                      fullWidth
                      multiline
                      rows={4}
                      disabled={sameAsLocal}
                    />
                    <div className="mt-2">
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={sameAsLocal}
                            onChange={(e) => setSameAsLocal(e.target.checked)}
                          />
                        }
                        label="Same as local address"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Education & Professional Details Section */}
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <GraduationCap className="text-primary mr-3" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Education & Professional Details
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <FormControl fullWidth>
                    <InputLabel>Last Education</InputLabel>
                    <Select>
                      <MenuItem value="High School">High School</MenuItem>
                      <MenuItem value="Diploma">Diploma</MenuItem>
                      <MenuItem value="Bachelor's Degree">
                        Bachelor's Degree
                      </MenuItem>
                      <MenuItem value="Master's Degree">
                        Master's Degree
                      </MenuItem>
                      <MenuItem value="PhD">PhD</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel>Department</InputLabel>
                    <Select>
                      <MenuItem value="Human Resources">
                        Human Resources
                      </MenuItem>
                      <MenuItem value="Information Technology">
                        Information Technology
                      </MenuItem>
                      <MenuItem value="Finance">Finance</MenuItem>
                      <MenuItem value="Marketing">Marketing</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel>Designation</InputLabel>
                    <Select>
                      <MenuItem value="Manager">Manager</MenuItem>
                      <MenuItem value="Officer">Officer</MenuItem>
                      <MenuItem value="Executive">Executive</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>

              {/* Employment Information Section */}
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <Briefcase className="text-primary mr-3" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Employment Information
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <TextField
                    label="Salary"
                    required
                    fullWidth
                    InputProps={{ startAdornment: <span>$</span> }}
                  />
                  <TextField
                    type="date"
                    label="Join Date"
                    InputLabelProps={{ shrink: true }}
                    required
                    fullWidth
                  />

                  <FormControl fullWidth>
                    <InputLabel>Working Type</InputLabel>
                    <Select>
                      <MenuItem value="Remote">Remote</MenuItem>
                      <MenuItem value="Physical">Physical</MenuItem>
                      <MenuItem value="Hybrid">Hybrid</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>

              {/* Form Actions */}
              <div className="px-6 py-6 bg-gray-50 flex items-center justify-between space-x-4">
                <Typography variant="body2" color="textSecondary">
                  Fields marked with <span className="text-red-500">*</span> are
                  required
                </Typography>

                <div className="flex space-x-4">
                  <Button
                    type="button"
                    variant="outlined"
                    onClick={handleReset}
                    startIcon={<RotateCcw />}
                  >
                    Reset
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    startIcon={<Send />}
                  >
                    Send for Approval
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Additional Information Panel */}
      </main>
    </div>
  );
}
