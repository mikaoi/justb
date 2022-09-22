// ** React Imports
import { useState } from "react";

// ** MUI Imports
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

// ** Icons Imports
import ChevronDown from "mdi-material-ui/ChevronDown";

const AccordionControlled = () => {
  // ** State
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ChevronDown />}
          id="controlled-panel-header-1"
          aria-controls="controlled-panel-content-1"
        >
          <Typography>What is justb?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant="subtitle2">
            justb creates inclusive movement videos for extraordinary teachers,
            kids, and classrooms. justb is designed through the lens of
            neurodivergent students to create movement breaks that support as
            many students as possible. Meaningful movement is essential for kids
            physical health but also for their social and cognitive functioning.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ChevronDown />}
          id="controlled-panel-header-2"
          aria-controls="controlled-panel-content-2"
        >
          <Typography>What is required to use justb?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant="subtitle2">
            justb is designed for use in the average classroom or home. All the
            user needs is: <br></br>- A computer with up to date browsers.{" "}
            <br></br>- A broadband internet connection. <br></br>- A screen that
            all students can see (e.g., a projector, interactive whiteboard, or
            big monitor).
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ChevronDown />}
          id="controlled-panel-header-3"
          aria-controls="controlled-panel-content-3"
        >
          <Typography>When should I use justb?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant="subtitle1">
            justb is designed to be used at the discrepancy of our users. It’s
            available to be used 24/7.
            <Typography variant="subtitle2">
              1. Use justb consistently - everyday, (even if it’s only 5
              minutes) consistency is essential. <br></br>2. Use justb before
              you NEED it. justb will help kids regulate their bodies and
              emotions. Kids learn all new skills best when they are regulated,
              justb helps kids grow their toolbox of regulation strategies.
            </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ChevronDown />}
          id="controlled-panel-header-4"
          aria-controls="controlled-panel-content-4"
        >
          <Typography>How to navigate and find classes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>*Screen shot or video explanation</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ChevronDown />}
          id="controlled-panel-header-5"
          aria-controls="controlled-panel-content-5"
        >
          <Typography>Share Links to Videos</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant="subtitle2">
            You can share links to specific videos with your students in your
            virtual classrooms or through emails by using our share feature.
            These share links will allow others to view specific GoNoodle videos
            without the need to log in or sign up. Use this feature to make it
            easy for parents to try out your favorite GoNoodle videos, and
            encourage them to create free accounts to access the rest of the
            GoNoodle library.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionControlled;
