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
    const html = `<p>${data.content.content}</p>`;
    messages.insertAdjacentHTML('beforeend', html);
    newMessage.value='';
  }
});
