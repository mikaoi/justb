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
          <Typography>
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
          <Typography>
            justb is designed for use in the average classroom or home. All the
            user needs is: <br>
            </br>- A computer with up to date browsers. <br>
            </br>- A broadband
            internet connection. <br>
            </br>- A screen that all students can see (e.g., a
            projector, interactive whiteboard, or big monitor).
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
          <Typography>
            Gingerbread lemon drops bear claw gummi bears bonbon wafer jujubes
            tiramisu. Jelly pie cake. Sweet roll dessert sweet pastry powder.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionControlled;
