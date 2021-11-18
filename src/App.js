import React from "react";
import vtkActor from "@kitware/vtk.js/Rendering/Core/Actor";
import { View, GeometryRepresentation, Reader } from "react-vtk-js";

// React complains about unique key prop but I don't see why
function Example(props) {
  const actor = vtkActor.newInstance();
  actor.getProperty().setEdgeVisibility(true);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <View>
        <GeometryRepresentation
          property={{
            color: [255, 255, 255],
            opacity: 1.0,
            edgeVisibility: true,
          }}
          showScalarBar={false}
        >
          <Reader vtkClass="vtkXMLPolyDataReader" url="/can_0.vtp" />
        </GeometryRepresentation>
      </View>
    </div>
  );
}

// Render React object
export default Example;
