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
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ChevronDown />}
          id="controlled-panel-header-6"
          aria-controls="controlled-panel-content-6"
        >
          <Typography>How to turn on closed captions</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant="subtitle2">
            
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          expandIcon={<ChevronDown />}
          id="controlled-panel-header-7"
          aria-controls="controlled-panel-content-7"
        >
          <Typography>Content Standards</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant="subtitle2">
        All justb content added must adhere to the following standards:
<br></br>
- Our content is school-appropriate.
<br></br>
<br></br>
- Our content is age appropriate for kids, age 5 to 12.
<br></br>
- Our content is designed to be inclusive of many students different learning needs while recognizing that it currently does not meet the individual needs of every student.
<br></br>
- Our content is positive and empowering in tone.
<br></br>
- Our content promotes a healthy lifestyle. It never promotes drug or alcohol use, violence, inappropriate language, bullying, or sexual activity.
<br></br>
- Our content is fun for kids.
<br></br>
- Our content always encourages kids to move and practice healthy holistic habits.
<br></br>
- Our content never includes specific endorsements of religious or political views.
<br></br>

When creating or curating content, our standards are identical to those used by the MPAA in rating television or movie content. We're committed to keeping justb "G-rated."
<br></br>

*According to the MPAA, a "G-rated motion picture contains nothing in theme, language, nudity, sex, violence or other matters that, in the view of the Rating Board, would offend parents whose younger children view the motion picture."*

**Content Appropriateness**
<br></br>

While justb holds all content accountable to the standards above, content appropriateness is ultimately subjective. Adults are encouraged to make their own decisions about which justb activities they feel are appropriate and avoid those they do not feel comfortable using.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionControlled;
