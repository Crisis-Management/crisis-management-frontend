import React from 'react';
import { BaseModal } from './BaseModal';
import { ResourceForm } from '../forms/resource/ResourceForm';
import { Resource } from '../../types/resources';

interface ResourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  resource?: Resource;
  onSubmit: (data: Partial<Resource>) => Promise<void>;
}

export const ResourceModal = ({ isOpen, onClose, resource, onSubmit }: ResourceModalProps) => {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={resource ? 'Edit Resource' : 'Create Resource'}
    >
      <ResourceForm
        initialData={resource}
        onSubmit={onSubmit}
        onCancel={onClose}
      />
    </BaseModal>
  );
};