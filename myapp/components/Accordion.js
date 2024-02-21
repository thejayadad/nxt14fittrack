import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";

const ExerciseAccordion = ({ name, id }) => {
  return (
    <Accordion variant="splitted">
      <AccordionItem key={id} aria-label="Exercise Accordion" title={name}>
        {name}
      </AccordionItem>
    </Accordion>
  );
};

export default ExerciseAccordion;
