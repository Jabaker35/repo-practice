SELECT 
test_assignment,
COUNT(user_id) as users,
SUM(order_binary) as users_with_orders
FROM 
(
SELECT 
test_events.test_id,
test_events.test_assignment,
test_events.user_id,
MAX (CASE WHEN orders.created_at > test_events.event_time then 1 ELSE 0 END) AS order_binary
FROM 
(SELECT 
  event_id,
  event_time,
  user_id,
  MAX (CASE WHEN parameter_name = 'test_id'
    then parameter_value 
    ELSE NULL 
    END) as test_id,
  MAX (CASE WHEN parameter_name = 'test_assignment'
    then parameter_value 
    ELSE NULL 
    END) as test_assignment
    
    
from 
  dsv1069.events 
WHERE
  event_name = 'test_assignment'
GROUP BY
  event_id,
  event_time,
  user_id) test_events
  
   LEFT JOIN 
    dsv1069.orders
  on 
    orders.user_id = test_events.user_id 

GROUP BY
   test_events.event_id,
   test_events.event_time,
   test_events.user_id,
   test_events.test_id,
   test_events.test_assignment
  ) user_level
  
WHERE test_id = '7'

GROUP BY
  test_assignment
-- Assignment :
  -- WRITE A QUERY TO SUM THE TOTAL REVENUE IN CONTROL AND TREATMENT GROUP RESPECTIVELY AND DO AB TEST