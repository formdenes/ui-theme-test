import * as React from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Fab,
  Input,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Switch,
  Slider,
  Rating,
  Chip,
  Avatar,
  Badge,
  Tooltip,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
  AlertTitle,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  LinearProgress,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Tab,
  Breadcrumbs,
  Link,
  AppBar,
  Toolbar,
  BottomNavigation,
  BottomNavigationAction,
  Stepper,
  Step,
  StepLabel,
  Pagination,
  ToggleButton,
  ToggleButtonGroup,
  Stack,
  Container,
  InputAdornment,
} from "@mui/material";

export default function AllMaterialUIComponents() {
  const [age, setAge] = React.useState("");
  const [radioValue, setRadioValue] = React.useState("female");
  const [sliderValue, setSliderValue] = React.useState(30);
  const [tabValue, setTabValue] = React.useState(0);
  const [toggleValue, setToggleValue] = React.useState<string | null>("left");
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const colors = [
    "primary",
    "secondary",
    "success",
    "error",
    "info",
    "warning",
  ] as const;
  const sizes = ["small", "medium"] as const;

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h2" gutterBottom sx={{ mb: 4, fontWeight: "bold" }}>
        Material UI v7 Component Showcase
      </Typography>

      {/* Buttons Section */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Buttons
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Contained Buttons
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <Button key={"e"} variant="contained">
                Button
              </Button>
          </Stack>
        </Box>
      </Paper>
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Form items
        </Typography>

        <Box sx={{ mb: 3 }}>
          <InputLabel>Input</InputLabel>
          <Input></Input>
        </Box>
        <Box>
          <Stack spacing={2}>
            <FormControl fullWidth>
              <FormLabel>Select</FormLabel>
              <Select
                value={age}
                onChange={(e) => setAge(e.target.value)}
                displayEmpty
              >
                <MenuItem value={1}>Item 1</MenuItem>
                <MenuItem value={2}>Item 2</MenuItem>
                <MenuItem value={3}>Item 3</MenuItem>
                <MenuItem value={4}>Item 4</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Box>
        <Box sx={{ mb: 3 }}>
          <Box sx={{ mb: 3 }}>
          <Stack>
            <FormControlLabel control={<Checkbox defaultChecked />} label={"checkbox"} />
          </Stack>
          </Box>
          <Stack>
            <FormControlLabel control={<Switch />} label="switch " />
          </Stack>
        </Box>
      </Paper>

      {/* Data Display Section */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Data Display
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Chips
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            useFlexGap
            sx={{ mb: 2 }}
          >
            <Typography variant="body2" sx={{ width: "100%", mb: 1 }}>
              Filled:
            </Typography>
            {colors.map((color) => (
              <Chip key={color} label={color} color={color} />
            ))}
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            useFlexGap
            sx={{ mb: 2 }}
          >
            <Typography variant="body2" sx={{ width: "100%", mb: 1 }}>
              Outlined:
            </Typography>
            {colors.map((color) => (
              <Chip
                key={color}
                label={color}
                color={color}
                variant="outlined"
              />
            ))}
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            useFlexGap
            sx={{ mb: 2 }}
          >
            <Typography variant="body2" sx={{ width: "100%", mb: 1 }}>
              Sizes:
            </Typography>
            {sizes.map((size) => (
              <Chip key={size} label={size} size={size} color="primary" />
            ))}
          </Stack>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            <Typography variant="body2" sx={{ width: "100%", mb: 1 }}>
              With Avatar & Deletable:
            </Typography>
            <Chip
              avatar={<Avatar>M</Avatar>}
              label="With Avatar"
              color="secondary"
            />
            <Chip label="Deletable" onDelete={() => {}} color="success" />
            <Chip
              label="Clickable"
              onClick={() => {}}
              onDelete={() => {}}
              color="info"
            />
          </Stack>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Badges
          </Typography>
          <Stack direction="row" spacing={4}>
            {colors.map((color) => (
              <Badge key={color} badgeContent={4} color={color}>
                <span>📧</span>
              </Badge>
            ))}
            <Badge badgeContent={99} color="primary">
              <span>📧</span>
            </Badge>
            <Badge badgeContent={100} max={99} color="secondary">
              <span>📧</span>
            </Badge>
            <Badge variant="dot" color="error">
              <span>📧</span>
            </Badge>
          </Stack>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Avatars
          </Typography>
          <Stack direction="row" spacing={2}>
            <Avatar>H</Avatar>
            <Avatar sx={{ bgcolor: "primary.main" }}>P</Avatar>
            <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
            <Avatar sx={{ width: 24, height: 24 }}>S</Avatar>
            <Avatar>M</Avatar>
            <Avatar sx={{ width: 56, height: 56 }}>L</Avatar>
          </Stack>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            Tooltips
          </Typography>
          <Stack direction="row" spacing={2}>
            <Tooltip title="Delete">
              <IconButton>
                <span>🗑️</span>
              </IconButton>
            </Tooltip>
            <Tooltip title="Top" placement="top">
              <Button>Top</Button>
            </Tooltip>
            <Tooltip title="Right" placement="right">
              <Button>Right</Button>
            </Tooltip>
            <Tooltip title="Bottom" placement="bottom">
              <Button>Bottom</Button>
            </Tooltip>
            <Tooltip title="Left" placement="left">
              <Button>Left</Button>
            </Tooltip>
          </Stack>
        </Box>
      </Paper>

      {/* Cards Section */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Cards & Surfaces
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          <Box sx={{ flex: "1 1 300px", minWidth: 250 }}>
            <Card>
              <CardHeader title="Card Title" subheader="Card Subheader" />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This is the card content. Cards contain content and actions
                  about a single subject.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Action 1</Button>
                <Button size="small">Action 2</Button>
              </CardActions>
            </Card>
          </Box>

          <Box sx={{ flex: "1 1 300px", minWidth: 250 }}>
            <Card variant="outlined">
              <CardHeader title="Outlined Card" />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This is an outlined variant of the Card component.
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ flex: "1 1 300px", minWidth: 250 }}>
            <Card elevation={8}>
              <CardHeader
                avatar={<Avatar sx={{ bgcolor: "primary.main" }}>R</Avatar>}
                title="Card with Avatar"
                subheader="September 14, 2024"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Card with high elevation (8).
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            Paper Elevations
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
              <Box key={elevation} sx={{ flex: "0 0 auto", minWidth: 100 }}>
                <Paper elevation={elevation} sx={{ p: 2, textAlign: "center" }}>
                  {elevation}
                </Paper>
              </Box>
            ))}
          </Box>
        </Box>
      </Paper>

      {/* Feedback Section */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Feedback Components
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Alerts
          </Typography>
          <Stack spacing={2}>
            <Alert severity="error">This is an error alert</Alert>
            <Alert severity="warning">This is a warning alert</Alert>
            <Alert severity="info">This is an info alert</Alert>
            <Alert severity="success">This is a success alert</Alert>
            <Alert severity="error" variant="outlined">
              This is an outlined error alert
            </Alert>
            <Alert severity="success" variant="filled">
              This is a filled success alert
            </Alert>
            <Alert
              severity="info"
              action={
                <Button color="inherit" size="small">
                  UNDO
                </Button>
              }
            >
              <AlertTitle>Info Alert with Title</AlertTitle>
              This is an alert with a title and action button
            </Alert>
          </Stack>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Progress Indicators
          </Typography>
          <Stack spacing={3}>
            <Box>
              <Typography variant="body2" gutterBottom>
                Linear Progress - Colors:
              </Typography>
              <Stack spacing={1}>
                {colors.map((color) => (
                  <LinearProgress key={color} color={color} />
                ))}
                <LinearProgress variant="determinate" value={50} />
                <LinearProgress variant="buffer" value={60} valueBuffer={80} />
              </Stack>
            </Box>
            <Box>
              <Typography variant="body2" gutterBottom>
                Circular Progress - Colors & Sizes:
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                {colors.map((color) => (
                  <CircularProgress key={color} color={color} />
                ))}
                <CircularProgress size={20} />
                <CircularProgress size={40} />
                <CircularProgress size={60} />
                <CircularProgress variant="determinate" value={75} />
              </Stack>
            </Box>
          </Stack>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            Dialogs & Snackbars
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={() => setDialogOpen(true)}>
              Open Dialog
            </Button>
            <Button variant="contained" onClick={() => setSnackbarOpen(true)}>
              Show Snackbar
            </Button>
          </Stack>

          <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogContent>
              <Typography>
                This is a dialog. Dialogs inform users about a task and can
                contain critical information, require decisions, or involve
                multiple tasks.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
              <Button onClick={() => setDialogOpen(false)} variant="contained">
                Confirm
              </Button>
            </DialogActions>
          </Dialog>

          <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={() => setSnackbarOpen(false)}
            message="This is a snackbar message"
            action={
              <Button
                color="inherit"
                size="small"
                onClick={() => setSnackbarOpen(false)}
              >
                CLOSE
              </Button>
            }
          />
        </Box>
      </Paper>

      {/* Navigation Section */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Navigation Components
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Tabs
          </Typography>
          <Tabs
            value={tabValue}
            onChange={(_, newValue) => setTabValue(newValue)}
          >
            <Tab label="Tab One" />
            <Tab label="Tab Two" />
            <Tab label="Tab Three" />
          </Tabs>
          <Box sx={{ mt: 2 }}>
            <Tabs
              value={tabValue}
              onChange={(_, newValue) => setTabValue(newValue)}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
              <Tab label="Item Four" />
              <Tab label="Item Five" />
            </Tabs>
          </Box>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Breadcrumbs
          </Typography>
          <Breadcrumbs>
            <Link underline="hover" color="inherit" href="#">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Category
            </Link>
            <Typography color="text.primary">Current Page</Typography>
          </Breadcrumbs>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Pagination
          </Typography>
          <Stack spacing={2}>
            <Pagination count={10} />
            <Pagination count={10} color="primary" />
            <Pagination count={10} color="secondary" />
            <Pagination count={10} size="small" />
            <Pagination count={10} size="large" />
            <Pagination count={10} variant="outlined" />
            <Pagination count={10} shape="rounded" />
          </Stack>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Stepper
          </Typography>
          <Stepper activeStep={1}>
            <Step>
              <StepLabel>Step 1</StepLabel>
            </Step>
            <Step>
              <StepLabel>Step 2</StepLabel>
            </Step>
            <Step>
              <StepLabel>Step 3</StepLabel>
            </Step>
          </Stepper>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            Bottom Navigation
          </Typography>
          <BottomNavigation
            showLabels
            value={tabValue}
            onChange={(_, newValue) => setTabValue(newValue)}
          >
            <BottomNavigationAction label="Home" icon={<span>🏠</span>} />
            <BottomNavigationAction label="Favorites" icon={<span>❤️</span>} />
            <BottomNavigationAction label="Settings" icon={<span>⚙️</span>} />
          </BottomNavigation>
        </Box>
      </Paper>

      {/* Lists & Tables Section */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Lists & Tables
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Lists
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  primary="List Item 1"
                  secondary="Secondary text"
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  primary="List Item 2"
                  secondary="Secondary text"
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  primary="List Item 3"
                  secondary="Secondary text"
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            Table
          </Typography>
          <TableContainer component={Paper} variant="outlined">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell align="right">Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Item 1</TableCell>
                  <TableCell>Category A</TableCell>
                  <TableCell align="right">100</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Item 2</TableCell>
                  <TableCell>Category B</TableCell>
                  <TableCell align="right">200</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Item 3</TableCell>
                  <TableCell>Category C</TableCell>
                  <TableCell align="right">300</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Paper>

      {/* Accordion Section */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Accordions
        </Typography>

        <Accordion>
          <AccordionSummary expandIcon={<span>▼</span>}>
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This is the content of Accordion 1. It can contain any component
              or content you need.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<span>▼</span>}>
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>This is the content of Accordion 2.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<span>▼</span>}>
            <Typography>Accordion 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>This is the content of Accordion 3.</Typography>
          </AccordionDetails>
        </Accordion>
      </Paper>

      {/* Toggle Button Group Section */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Toggle Buttons
        </Typography>

        <Stack spacing={3}>
          {colors.map((color) => (
            <Box key={color}>
              <Typography variant="body2" gutterBottom>
                {color}:
              </Typography>
              <ToggleButtonGroup
                value={toggleValue}
                exclusive
                onChange={(_, newValue) => setToggleValue(newValue)}
                color={color}
              >
                <ToggleButton value="left">
                  <span>⭐</span>
                </ToggleButton>
                <ToggleButton value="center">
                  <span>❤️</span>
                </ToggleButton>
                <ToggleButton value="right">
                  <span>👤</span>
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
          ))}

          {/* Size Variants with All Colors */}
          {[
            {
              size: "small",
              disabledColor: "info",
              iconColor: "error",
              icon: "🔔",
            },
            {
              size: "medium",
              disabledColor: "secondary",
              iconColor: "success",
              icon: "✓",
            },
            {
              size: "large",
              disabledColor: "warning",
              iconColor: "info",
              icon: "ℹ",
            },
            {
              size: "mini",
              disabledColor: "warning",
              iconColor: "info",
              icon: "ℹ",
            },
          ].map(({ size, disabledColor, iconColor, icon }) => (
            <Box key={size}>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ textTransform: "capitalize" }}
              >
                {size}:
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {/* Default color (no color prop) */}
                <ToggleButtonGroup
                  size={size as any}
                  value={toggleValue}
                  onChange={(_, newValue) => setToggleValue(newValue)}
                  exclusive
                >
                  <ToggleButton value="left">Default</ToggleButton>
                  <ToggleButton value="right">Default</ToggleButton>
                </ToggleButtonGroup>

                {/* All color variants */}
                {colors.map((color) => (
                  <ToggleButtonGroup
                    key={color}
                    size={size as any}
                    value={toggleValue}
                    onChange={(_, newValue) => setToggleValue(newValue)}
                    exclusive
                    color={color}
                    disabled={color === disabledColor}
                  >
                    <ToggleButton value="left">
                      {color === iconColor && (
                        <span style={{ marginRight: "4px" }}>{icon}</span>
                      )}
                      {color.charAt(0).toUpperCase() + color.slice(1)}
                    </ToggleButton>
                    <ToggleButton value="right">
                      {color.charAt(0).toUpperCase() + color.slice(1)}
                    </ToggleButton>
                  </ToggleButtonGroup>
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Paper>

      {/* Dividers Section */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Dividers
        </Typography>

        <Stack spacing={2}>
          <Typography>Content Above</Typography>
          <Divider />
          <Typography>Content Below</Typography>
          <Divider textAlign="left">Left Aligned Text</Divider>
          <Divider textAlign="center">Center Aligned Text</Divider>
          <Divider textAlign="right">Right Aligned Text</Divider>
          <Divider>
            <Chip label="Chip Divider" />
          </Divider>
        </Stack>
      </Paper>

      {/* Typography Section */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Typography
        </Typography>

        <Stack spacing={2}>
          <Typography variant="h1">h1. Heading</Typography>
          <Typography variant="h2">h2. Heading</Typography>
          <Typography variant="h3">h3. Heading</Typography>
          <Typography variant="h4">h4. Heading</Typography>
          <Typography variant="h5">h5. Heading</Typography>
          <Typography variant="h6">h6. Heading</Typography>
          <Typography variant="subtitle1">
            subtitle1. Lorem ipsum dolor sit amet
          </Typography>
          <Typography variant="subtitle2">
            subtitle2. Lorem ipsum dolor sit amet
          </Typography>
          <Typography variant="body1">
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
          <Typography variant="body2">
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
          <Typography variant="button">button text</Typography>
          <Typography variant="caption">caption text</Typography>
          <Typography variant="overline">overline text</Typography>
        </Stack>
      </Paper>

      {/* App Bar Section */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          App Bar
        </Typography>

        <Box sx={{ mb: 2 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
                <span>☰</span>
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Primary App Bar
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>

        <Box sx={{ mb: 2 }}>
          <AppBar position="static" color="secondary">
            <Toolbar>
              <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
                <span>☰</span>
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Secondary App Bar
              </Typography>
              <IconButton color="inherit">
                <span>🔍</span>
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>

        <Box>
          <AppBar position="static" color="transparent">
            <Toolbar>
              <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
                <span>☰</span>
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Transparent App Bar
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </Paper>

      <Box sx={{ textAlign: "center", py: 4 }}>
        <Typography variant="h6" color="text.secondary">
          End of Material UI v7 Component Showcase
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Note: Using emoji icons as placeholders. Install @mui/icons-material
          for proper Material Design icons.
        </Typography>
      </Box>
    </Container>
  );
}
