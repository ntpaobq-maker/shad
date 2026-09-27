var obj = JSON.parse($response.body);

obj = {
  "request_date_ms": 1700000000000,
  "request_date": "2023-11-15T00:00:00Z",
  "subscriber": {
    "non_subscriptions": {},
    "first_seen": "2023-11-15T00:00:00Z",
    "original_application_version": "1.0",
    "other_purchases": {},
    "management_url": null,
    "subscriptions": {
      "Gold_Yearly": {
        "is_sandbox": false,
        "ownership_type": "PURCHASED",
        "billing_issues_detected_at": null,
        "store": "app_store",
        "auto_resume_date": null,
        "period_type": "normal",
        "unsubscribe_detected_at": null,
        "expires_date": "2099-12-31T23:59:59Z",
        "original_purchase_date": "2023-11-15T00:00:00Z",
        "purchase_date": "2023-11-15T00:00:00Z",
        "store_transaction_id": "1000000000000000"
      }
    },
    "entitlements": {
      "Gold": {
        "grace_period_expires_date": null,
        "purchase_date": "2023-11-15T00:00:00Z",
        "product_identifier": "Gold_Yearly",
        "expires_date": "2099-12-31T23:59:59Z"
      }
    },
    "original_purchase_date": "2023-11-15T00:00:00Z",
    "original_app_user_id": "$RCAnonymousID:ntanphatt",
    "last_seen": "2023-11-15T00:00:00Z"
  }
};

$done({body: JSON.stringify(obj)});
