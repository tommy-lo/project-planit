Meeting time:

1 hour

Participants:

Thomas Lo

Joon Hong

Kia Naderi

Brandon Shewnarain

Anson Tran


Sprint Backlog:

PLAN-4 Setting budget, date, time and location of trip(Priority: high, Point: 4)

PLAN-4 : As a user I would like to set the budget I’m willing to spend for the trip so I can view the activities that will be appropriate for me. 

- PLAN-20 Create filters screen : has filters for budget, date, time, location

PLAN-16 Let user make an account(Priority: high, Point: 5)

PLAN-16 : As a user of the app I would like to make an account to personalize my app experience and access more features of the app.

- PLAN-18 Create account screen : Front end create account screen

- PLAN-19 Call API to make new user : need to insert username and password into database HTTP request type: PUT /createuser

PLAN-13 No bloatware in itinerary, just what the user wants to see in an efficient manner(Priority: high , Point: 5)
  PLAN-13 :As a user, I want a clear and concise itinerary to show me the locations I can visit as well as the activities I want to participate in based off of the filters that I have chosen so that I can plan my day based on my interests efficiently.

- PLAN-21 Create itinerary :connect to google maps API and get response based on filter options the user has specified

- PLAN-22 Create itinerary screen : Front end

- PLAN-23 Get itinerary from server : Get user history, preferences from database

--- [PLAN-2 and PLAN-12] was not started in this task because it depends on the completion of PLAN-13(generating itinerary). We initially planned on finishing PLAN-13 and then start working on [PLAN-2 and PLAN-12] but this did not work out because we were not very familiar with angular and integrating google places API into our app turned out to be quite difficult. For instance, we first tried google places API as sending an https request and tried to get a response but we encountered lots of errors mainly CORS (Access-Control-Allow-Origin) then we had to move to use google places library to get it to work.

PLAN-12 Remove items that they don't like on the generated itinerary

- PLAN-24 StoreUser preferences to user account

- PLAN-25 Recreate itinerary 

PLAN-2 Removing things they aren't interested in

- PLAN-26 Suggest items to user

- PLAN-27 Add liked suggestions to itinerary

Sprint 1 Backlog Breakdown:

Plan-22,23 Thomas Lo

Plan-16 Joon Hong

Plan-21 Kia Naderi

Plan-4,20 Brandon Shewnarain

Plan-12 Anson


