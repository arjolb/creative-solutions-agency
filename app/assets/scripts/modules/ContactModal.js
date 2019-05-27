import $ from 'jquery';

class ContactModal{
    constructor(){
        this.showModalBtn=$(".open-contact-modal");
        this.modal=$(".modal");
        this.hideModalBtn=$(".modal__close");
        this.events();
    }

    events(){
        this.showModalBtn.click(this.showModal.bind(this));
        this.hideModalBtn.click(this.closeModal.bind(this));
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e) {
        if (e.keyCode == 27) {
          this.closeModal();
        }
      }

    showModal(){
        this.modal.addClass("modal--is-visible");
        return false;
    }

    closeModal(){
        this.modal.removeClass("modal--is-visible");
    }
}

export default ContactModal;