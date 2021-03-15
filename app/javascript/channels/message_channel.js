import consumer from "./consumer"

consumer.subscriptions.create("MessageChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log('[MessageChannel] connected');
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
    console.log('[MessageChannel] disconnected');
  },

  received(data) {
    console.log('[MessageChannel] received. data=%o', data);
    const messages = document.getElementById('messages');
    const newMessage = document.getElementById('message_text');
    const html = `
    <div class="message">
      <div class="upper-message">
        <div class="message-user">
          ${ data.content.user_name }
        </div>
        <div class="message-date">
          ${ data.content.created_at }
        </div>
      </div>
      <div class="lower-message">
        <div class="message-content">
          ${ data.content.content }
        </div>
      </div>
    </div>
    `;
    messages.insertAdjacentHTML('beforeend', html);

    const bottom = messages.scrollHeight - messages.clientHeight;
    messages.scroll(0, bottom);

    newMessage.value='';
  }
});
