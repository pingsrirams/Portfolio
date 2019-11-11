$('.fmodal-btn').submit(function(e) {
	var name = document.getElementById('name'),
		email = document.getElementById('email'),
		service = document.getElementById('service'),
		subject = document.getElementById('subject');

	if (!name.value || !email.value || !service.value || !subject.value) {
		alertify.error('Please Check Your Entries')
	} else {
		$.ajax({
			url: "https://formspree.io/xyqgzwgx/pingsrirams@gmail.com",
			method: "POST",
			data: $(this).serialize(),
			dataType: "json"
		});
		e.preventDefault()
		$(this).get(0).reset()
		alertify.success('Message Sent')
	}
})