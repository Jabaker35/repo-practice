/* Identify bounce rate for the landing page
1. Identify website sessions bounced (with only one pageview)
2. All sessions / bounce sessions = bounce rate
*/
SELECT (SELECT COUNT(website_session_id) FROM website_sessions)/
(SELECT COUNT(website_session_id) FROM website_sessions WHERE user_id = 1)
AS bounce_rate;