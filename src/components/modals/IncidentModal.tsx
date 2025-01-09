import React from 'react';
import { BaseModal } from './BaseModal';
import { IncidentForm } from '../forms/incident/IncidentForm';
import { Incident } from '../../types/incidents';

interface IncidentModalProps {
  isOpen: boolean;
  onClose: () => void;
  incident?: Incident;
  onSubmit: (data: Partial<Incident>) => Promise<void>;
}

export const IncidentModal = ({ isOpen, onClose, incident, onSubmit }: IncidentModalProps) => {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={incident ? 'Edit Incident' : 'Create Incident'}
    >
      <IncidentForm
        initialData={incident}
        onSubmit={onSubmit}
        onCancel={onClose}
      />
    </BaseModal>
  );
};