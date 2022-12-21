/* Identify top entry pages
1. Identify first pageview_id for each session (subquery)
2. Identify landing pages and count number of sessions hitting that page
*/
SELECT *, COUNT(pageview_url) AS most_viewed 
FROM (SELECT website_session_id, website_pageview_id, pageview_url FROM website_pageviews) x
GROUP BY pageview_url ORDER BY most_viewed DESC LIMIT 5;