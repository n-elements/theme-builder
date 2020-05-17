import React from "react";
import { Expander } from "@components/Expander";
// import { VariableList } from "./VariableList";

export default function ElementsVariables() {
  return (
    // <VariableList />

    // This should be inside VariableList for Elements. It's here as UI demo
    <div ne-details-group="true">
      <Expander summary="Buttons">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          a labore dignissimos doloribus et vitae. Architecto accusamus fugiat
          provident molestias doloremque itaque est expedita corporis possimus,
          molestiae, sed nobis. Et. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Accusantium a labore dignissimos doloribus et vitae.
          Architecto accusamus fugiat provident molestias doloremque itaque est
          expedita corporis possimus, molestiae, sed nobis. Et. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Accusantium a labore
          dignissimos doloribus et vitae. Architecto accusamus fugiat provident
          molestias doloremque itaque est expedita corporis possimus, molestiae,
          sed nobis. Et. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Accusantium a labore dignissimos doloribus et vitae. Architecto
          accusamus fugiat provident molestias doloremque itaque est expedita
          corporis possimus, molestiae, sed nobis. Et.
        </p>
      </Expander>
      <Expander summary="Textfields">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          a labore dignissimos doloribus et vitae. Architecto accusamus fugiat
          provident molestias doloremque itaque est expedita corporis possimus,
          molestiae, sed nobis. Et.
        </p>
      </Expander>
    </div>
  );
}
