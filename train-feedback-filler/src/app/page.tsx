import { BottomNavigation, BottomNavigationAction, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

const PROBLEM_TEMPLATES = [
  {
    id: "clipper-reader",
    label: "Clipper Reader",
  },
  {
    id: "wifi",
    label: "WiFi",
  },
  {
    id: "other",
    label: "Other",
  },
];

export default function Home() {
  return (
    <>
      <Stack spacing={1}>
        <Typography variant="h6">New Report</Typography>
        {PROBLEM_TEMPLATES.map((template) => (
          <Button
            variant="outlined"
            key={template.id}
            LinkComponent={Link}
            href={`/templates/${template.id}`}
          >
            {template.label}
          </Button>
        ))}
      </Stack>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="New Report"/>
        <BottomNavigationAction label="Reports"/>
        <BottomNavigationAction label="Settings"/>
      </BottomNavigation>
    </>
  );
}
