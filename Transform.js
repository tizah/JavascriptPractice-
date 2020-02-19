let json = JSON.parse([
  {
    classes: [
      {
        appointmentsSpecifics: [
          {
            appointmentSpecificId: 16,
            appointmentStatusType: "Booked",
            timeSlot: {
              timeBlock: "10:00 am",
              date: "2020-02-14T00:00:00+00:00",
              timeSlotId: 37
            }
          }
        ],
        student: {
          englishName: "Elisabeth",
          chineseName: "伊丽莎白"
        },
        course: {
          courseName: "Chinese"
        }
      },
      {
        appointmentsSpecifics: [
          {
            appointmentSpecificId: 286,
            appointmentStatusType: "Unavailable",
            timeSlot: {
              timeBlock: "4:00 pm",
              date: "2020-02-12T00:00:00+00:00",
              timeSlotId: 35
            }
          },
          {
            appointmentSpecificId: 1,
            appointmentStatusType: "Booked",
            timeSlot: {
              timeBlock: "4:00 pm",
              date: "2020-02-12T00:00:00+00:00",
              timeSlotId: 35
            }
          }
        ],
        student: { englishName: "Elisabeth", chineseName: "伊丽莎白" },
        course: { courseName: "English" }
      },
      {
        appointmentsSpecifics: [
          {
            appointmentSpecificId: 2,
            appointmentStatusType: "Booked",
            timeSlot: {
              timeBlock: "5:00 pm",
              date: "2020-02-14T00:00:00+00:00",
              timeSlotId: 36
            }
          }
        ],
        student: { englishName: "Hanson", chineseName: "望舒" },
        course: { courseName: "Chinese" }
      }
    ]
  }
]);

console.log(json.classes.map(x => x));
