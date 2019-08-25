﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectManagerServices.Models
{
    public class Projects
    {
        public int ProjectID { get; set; }
        public string Project { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int Priority { get; set; }
        public int ManagerID { get; set; }
        public string ManagerName { get; set; }
        public int NoOfTasks { get; set; }
        public int NoOfCompletedTasks { get; set; }
    }
}