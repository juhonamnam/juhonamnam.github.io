const { openImageModal } = (() => {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) {
    throw new Error("Modal root element not found");
  }

  function closeLastModal() {
    const lastModal = modalRoot.lastChild;
    if (lastModal) {
      modalRoot.removeChild(lastModal);
    }
  }

  function focusTrap(keyboardEvent) {
    if (keyboardEvent.key === "Tab") {
      const lastModal = modalRoot.lastChild;
      if (!lastModal) return;

      const focusableElements = lastModal.querySelectorAll(
        "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])",
      );

      if (focusableElements.length === 0) {
        keyboardEvent.preventDefault();
        return;
      }

      if (!document.activeElement) {
        focusableElements[0].focus();
        keyboardEvent.preventDefault();
        return;
      }

      let idx = -1;
      for (let i = 0; i < focusableElements.length; i++) {
        if (focusableElements[i] === document.activeElement) {
          idx = i;
          break;
        }
      }

      if (idx === -1) {
        focusableElements[0].focus();
        keyboardEvent.preventDefault();
        return;
      }

      if (keyboardEvent.shiftKey) {
        if (idx === 0) {
          focusableElements[focusableElements.length - 1].focus();
          keyboardEvent.preventDefault();
        }
      } else {
        if (idx === focusableElements.length - 1) {
          focusableElements[0].focus();
          keyboardEvent.preventDefault();
        }
      }
    }
  }

  window.addEventListener("keydown", focusTrap);

  return {
    openImageModal(imageUrl, orientation) {
      const modalBackground = document.createElement("div");
      modalBackground.setAttribute("class", "modal-background");

      modalBackground.addEventListener("click", closeLastModal);

      const modal = document.createElement("div");
      modal.setAttribute("class", "modal image-modal");
      modal.addEventListener("click", function (event) {
        event.stopPropagation();
      });

      const closeButtonWrapper = document.createElement("div");
      closeButtonWrapper.setAttribute("class", "modal-close-button-wrapper");

      const closeButton = document.createElement("button");
      closeButton.setAttribute("class", "modal-close-button");

      closeButton.addEventListener("click", closeLastModal);

      closeButtonWrapper.appendChild(closeButton);

      modal.appendChild(closeButtonWrapper);

      const image = document.createElement("img");
      image.setAttribute("src", imageUrl);
      image.setAttribute("class", orientation);
      image.setAttribute("alt", "");

      modal.appendChild(image);
      modalBackground.appendChild(modal);

      modalRoot.appendChild(modalBackground);
    },
  };
})();