import React, { useState } from "react";
import NewPhases from "./NewPhases";

interface Phase {
  name: string;
}

interface PhaseCardProps {
  phase: Phase;
  onSelect: (phase: Phase) => void;
  isSelected: boolean;
}

const PhaseCard: React.FC<PhaseCardProps> = ({
  phase,
  onSelect,
  isSelected,
}) => {
  return (
    <div
      className={`border rounded p-4 cursor-pointer ${
        isSelected ? "bg-blue-200" : ""
      }`}
      onClick={() => onSelect(phase)}
    >
      <h3 className="text-lg font-semibold">{phase.name}</h3>
    </div>
  );
};

interface PhaseListProps {
  phases: Phase[];
  onSelectPhase: (selectedPhaseNames: string[]) => void;
}

const PhaseList: React.FC<PhaseListProps> = ({ phases, onSelectPhase }) => {
  const [selectedPhases, setSelectedPhases] = useState<Phase[]>([]);

  const handleSelect = (phase: Phase) => {
    const isSelected = selectedPhases.includes(phase);
    let updatedSelectedPhases: Phase[];
    if (isSelected) {
      updatedSelectedPhases = selectedPhases.filter(
        (selectedPhase) => selectedPhase !== phase
      );
    } else {
      updatedSelectedPhases = [...selectedPhases, phase];
    }
    setSelectedPhases(updatedSelectedPhases);
    onSelectPhase(updatedSelectedPhases.map((phase) => phase.name));
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {phases.map((phase, index) => (
        <PhaseCard
          key={index}
          phase={phase}
          onSelect={handleSelect}
          isSelected={selectedPhases.includes(phase)}
        />
      ))}
    </div>
  );
};

const PhaseSelectionPage: React.FC = () => {
  // Dummy data for phases
  const [openNewPhase, setOpenNewPhase] = useState(false);
 

  const handleClose = () => {
    setOpenNewPhase(false);
  };
  const phases: Phase[] = [
    {
      name: "Phase 1",
    },
    {
      name: "Phase 2",
    },
    {
      name: "Phase 3",
    },
    {
      name: "Phase 4",
    },
    {
      name: "Phase 5",
    },
    {
      name: "Phase 6",
    },
  ];

  const handleSelectPhase = (selectedPhaseNames: string[]) => {
    setOpenNewPhase(true);
    console.log("Selected phase names: ", selectedPhaseNames);

  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Select Phase:</h2>
      <PhaseList phases={phases} onSelectPhase={handleSelectPhase} />
      <NewPhases onClose={handleClose} visible={openNewPhase} />
    </div>
  );
};

export default PhaseSelectionPage;
