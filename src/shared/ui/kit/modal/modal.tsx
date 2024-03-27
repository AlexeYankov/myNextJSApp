import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  ModalFooter,
  Center,
} from '@chakra-ui/react';
import { BtnKit } from '../button';
import { CheckBoxKit } from '../checkbox';
import { InputKit } from '../input';

type ModalType = {
  title: string;
  actionTitle?: string;
  body?: string;
  checkBoxLabel?: string;
  fields?: Array<{ fieldName: string; placeHolder: string }>;
  cover?: Array<{ image: string }>;
  open: boolean;
  setOpen: () => void;
};

export const ModalKit = (prop: ModalType) => {
  const { title, fields, actionTitle, setOpen, open, checkBoxLabel, body } =
    prop;
  const actionHandler = () => {
    setOpen();
  };
  return (
    <Modal isOpen={open} onClose={actionHandler}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {body}
          {fields?.map((el, i) => {
            return (
              <InputKit
                label={el.fieldName}
                placeholder={el.placeHolder}
                key={i}
              />
            );
          })}
          <CheckBoxKit label={checkBoxLabel} />
        </ModalBody>

        <ModalFooter justifyContent={'space-between'}>
          <BtnKit onClick={actionHandler} variant="secondary">
            Cancel
          </BtnKit>
          <BtnKit onClick={actionHandler}>{actionTitle}</BtnKit>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
