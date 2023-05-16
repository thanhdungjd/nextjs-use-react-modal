import React from "react";
import Modal from "react-modal";

export default function Home() {
  // let subtitle;
  let subtitle: HTMLHeadingElement | null;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
    if (subtitle) {
      subtitle.style.color = "#f00";
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <main
      // #yourAppElement
      id="yourAppElement"
      className="p-5"
    >
      <button
        className="rounded-md border border-gray-500 px-5 py-2 hover:bg-slate-100 transition-all"
        onClick={openModal}
      >
        Open Modal
      </button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </main>
  );
}

Modal.setAppElement("#yourAppElement");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
