import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./atoms/accordion";

export function AccordionDemo() {
  return (
    <Accordion id="faq" type="single" collapsible className="w-full mb-20">
      <AccordionItem value="item-1">
        <AccordionTrigger>How the calculation works?</AccordionTrigger>
        <AccordionContent>
          The calculation considerer your expenses, business hours, fees and
          other factors to provide an accurate estimate of your billing
          potential.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          What the difference between free and paid plans?
        </AccordionTrigger>
        <AccordionContent>
          Free plans offer basic features and are limited to a certain number of
          projects. Paid plans offer additional features and unlimited projects.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          What support options are available for users?
        </AccordionTrigger>
        <AccordionContent>
          You can contact our support team via email. We aim to respond to all
          queries within 24 hours.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
