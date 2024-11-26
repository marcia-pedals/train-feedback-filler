"use client";

import { Stack, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function ClipperReader() {
  const [readerID, setReaderID] = useState("CAL-");
  const [describeProblem, setDescribeProblem] = useState("");
  const handleAutofill = (text: string) => {
    if (describeProblem.length > 0 && !describeProblem.endsWith(" ")) {
      text = " " + text;
    }
    setDescribeProblem(describeProblem + text);
  };
  return (
    <Stack spacing={3}>
      <Typography variant="h6">Clipper Reader</Typography>
      <Stack>
        <TextField
          label="Reader ID"
          inputProps={{ style: { textTransform: "uppercase" } }}
          value={readerID}
          onChange={(e) => setReaderID(e.target.value)}
        />
        <Typography variant="caption">
          The ID that starts with CAL-, at the base of the reader.
        </Typography>
      </Stack>
      <Stack>
        <TextField
          label="Describe Problem"
          multiline
          value={describeProblem}
          onChange={(e) => setDescribeProblem(e.target.value)}
        />
        <Stack direction="row" alignItems="center">
          <Typography>Autofill:</Typography>
          <Button onClick={() => handleAutofill("The reader is not on.")}>
            Not on
          </Button>
          <Button
            onClick={() => handleAutofill("The reader always gives error.")}
          >
            Always error
          </Button>
          <Button onClick={() => handleAutofill("The screen is obscured.")}>
            Screen obscured
          </Button>
        </Stack>
      </Stack>
      <Button variant="outlined">Create Report</Button>
    </Stack>
  );
}
