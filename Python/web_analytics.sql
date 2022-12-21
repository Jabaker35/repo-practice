-- Identify conversion rate by device type
-- Conversion rate by mobile and desktop
-- Columns: device type, sessions, orders, conversion_rate
SELECT ws.device_type, COUNT(DISTINCT ws.website_session_id) AS sessions,
COUNT(DISTINCT o.website_session_id) AS orders,
(COUNT(DISTINCT o.website_session_id) / COUNT(DISTINCT ws.website_session_id))
AS conversion_rate FROM website_sessions ws LEFT JOIN orders o USING (website_session_id)
GROUP BY device_type;

-- Identify weekly trends for both desktop and mobile session volume
SELECT created_at, device_type, WEEK(created_at) AS week_trends FROM website_sessions
GROUP BY device_type;

-- Identify the most viewed website pages
SELECT pageview_url, COUNT(pageview_url) AS most_viewed FROM website_pageviews
GROUP BY pageview_url ORDER BY most_viewed DESC;

/* Identify top entry pages
1. Identify first pageview_id for each session (subquery)
2. Identify landing pages and count number of sessions hitting that page
*/
SELECT *, COUNT(pageview_url) AS most_viewed 
FROM (SELECT website_session_id, website_pageview_id, pageview_url FROM website_pageviews) x
GROUP BY pageview_url ORDER BY most_viewed DESC LIMIT 5;

/* Identify bounce rate for the landing page
1. Identify website sessions bounced (with only one pageview)
2. All sessions / bounce sessions = bounce rate
*/
SELECT (SELECT COUNT(website_session_id) FROM website_sessions)/
(SELECT COUNT(website_session_id) FROM website_sessions WHERE user_id = 1)
AS bounce_rate;