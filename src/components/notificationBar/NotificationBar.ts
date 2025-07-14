import './notificationBar.css';

export function NotificationBar() {
  return `
    <section class="section has-background-black py-1"> 
     <div class="notification has-background-black has-text-white is-flex is-align-items-center is-justify-content-space-between px-0 py-0">
      <span class="has-text-centered notificationBar-text" >Sign up and get 20% off to your first order. <span class="notificationBar-text__sign_up">Sign Up Now</span></span>
      <button class="is-small has-text-right ">
        <img src="/assets/x.svg" alt="Close">
      </button>
     </div>
    </section>
  `;
}
