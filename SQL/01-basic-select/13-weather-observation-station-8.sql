SELECT DISTINCT CITY FROM STATION
WHERE CITY REGEXP '^[aeiou]' AND CITY REGEXP '[aeiou]$';

-- Of course this regex could've been simplified
-- into one expression but I prefer it this way
