-- Identify the most viewed website pages
SELECT pageview_url, COUNT(pageview_url) AS most_viewed FROM website_pageviews
GROUP BY pageview_url ORDER BY most_viewed DESC;