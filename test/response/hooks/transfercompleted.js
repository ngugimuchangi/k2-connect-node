module.exports = {
	"topic": "settlement_transfer_completed",
	"id": "052b7b2a-745b-4ca1-866b-b92d4a1418c3",
	"created_at": "2021-01-27T11:00:08+03:00",
	"event": {
		"type": "Settlement Transfer",
		"resource": {
			"id": "270b7b2a-745b-6735752-b92d4a141847-5d33",
			"amount": "49452.0",
			"status": "Transferred",
			"currency": "KES",
			"destination": {
				"type": "Bank Account",
				"resource": {
					"reference": "34a273d1-fedc-4610-8ab6-a1ba4828f317",
					"account_name": "Test Account",
					"account_number": "1234",
					"bank_branch_ref": "ea2e79f7-35a1-486e-9e18-fe06589a9d7d",
					"settlement_method": "EFT"
				}
			},
			"disbursements": [
				{
					"amount": "24452.0",
					"status": "Transferred",
					"origination_time": "2021-01-27T10:57:58.623+03:00",
					"transaction_reference": null
				},
				{
					"amount": "25000.0",
					"status": "Transferred",
					"origination_time": "2021-01-27T10:57:58.627+03:00",
					"transaction_reference": null
				}
			],
			"origination_time": "2021-01-27T10:57:58.444+03:00"
		}
	},
	"_links": {
		"self": "https://sandbox.kopokopo.com/webhook_events/052b7b2a-745b-4ca1-866b-b92d4a1418c3",
		"resource": "https://sandbox.kopokopo.com/transfer_batch/270b7b2a-745b-6735752-b92d4a141847-5d33"
	}
}
