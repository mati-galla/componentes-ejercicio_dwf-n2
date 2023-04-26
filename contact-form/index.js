function contactForm(element) {
  element.innerHTML = `<div class="main-container">
  <div class="sub-container">
    <h2 class="contact-form__title">Contacto</h2>

    <form action="" class="contact-form">
      <div class="contact-form__row">
        <label for="fullname" class="contact-form__label">NAME</label>
        <input type="text" id="fullname" class="contact-form__input" />
      </div>

      <div class="contact-form__row">
        <label for="email" class="contact-form__label">EMAIL</label>
        <input type="email" id="email" class="contact-form__input" />
      </div>

      <div class="contact-form__row">
        <label for="message" class="contact-form__label">MENSAJE</label>
        <textarea
          name="message"
          id="message"
          class="contact-form__textarea"
          cols="30"
          rows="10"></textarea>
      </div>

      <button class="contact-form__button">Enviar</button>
    </form>
  </div>
</div>`;
}
