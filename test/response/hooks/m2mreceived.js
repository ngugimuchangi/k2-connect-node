module.exports = {
	"topic": "m2m_transaction_received",
	"id": "5fbbcfc3-5b06-485e-929c-066741f4b14d",
	"created_at": "2020-10-29T08:37:31+03:00",
	"event": {
		"type": "Merchant to Merchant Transaction",
		"resource": {
			"id": "893ebbcfc3-e8993-485e-929c-066741f47847",
			"amount": "456",
			"status": "Received",
			"currency": "KES",
			"origination_time": "2020-10-29T08:37:31+03:00",
			"sending_merchant": "Jane Flowers"
		}
	},
	"_links": {
		"self": "https://sandbox.kopokopo.com/webhook_events/5fbbcfc3-5b06-485e-929c-066741f4b14d",
		"resource": "https://sandbox.kopokopo.com/payment_batches/893ebbcfc3-e8993-485e-929c-066741f47847"
	}
}
