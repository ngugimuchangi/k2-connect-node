module.exports = {
	"data": {
		"id": "a652f86f-f2aa-4d70-baa2-ccfe4b78f4fc",
		"type": "incoming_payment",
		"attributes": {
			"initiation_time": "2020-10-19T09:24:48.622+03:00",
			"status": "Success",
			"event": {
				"type": "Incoming Payment Request",
				"resource": {
					"id": "52f86f-f2aa-4d70-baa2-ccfe4b78f4fc",
					"reference": "OJJ1MPU40Z",
					"origination_time": "2020-10-19T09:24:54+03:00",
					"sender_phone_number": "+254999999999",
					"amount": "100.0",
					"currency": "KES",
					"till_number": "K514459",
					"system": "Lipa Na M-PESA",
					"status": "Received",
					"sender_first_name": "Joe",
					"sender_middle_name": null,
					"sender_last_name": "Buyer"
				},
				"errors": null
			},
			"metadata": {
				"customer_id": "123456789",
				"reference": "123456",
				"notes": "Payment for invoice 12345"
			},
			"_links": {
				"callback_url": "https://webhook.site/675d4ef4-0629-481f-83cd-d101f55e4bc8",
				"self": "http://sandbox.kopokopo.com/api/v1/incoming_payments/a652f86f-f2aa-4d70-baa2-ccfe4b78f4fc"
			}
		}
	}
}
