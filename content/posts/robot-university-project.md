---
title: "Robot Locality within a Pipeline"
date: 2015-04-21T00:00:00-08:00
---

#### Situation

A small robot needs to travel down a pipeline around 18 inches in diameter. It will be powered by battery alone and cannot be communicated once within the pipe. My task is to construct a method to allow it to travel down the pipe in a straight line. The robot also has a neodymium magnet strong enough to hold it upside down and against the fluid flow in the pipeline.

#### Issues

Here is a list of issues that I have uncovered:

- The robot will be magnetically attached to the pipe so any magnetic sensors will be unable to be calibrated and will interfered with be the magnet.
- The pipe has no light, so no light sensors would be viable unless there was an ambient light also on the robot.
- Any sensor that is added should be as energy efficient as possible as the robot is battery powered.

#### First Conclusions

By using some sort of laser sensor (IR or ultrasonic) on the sides of the robot to attempt to give a distance calculation between the robot and the walls would allow for a noticeable change in distance. The first issue arising out of this solution would be that placing the sensors directly on the sides it may reflect upwards. An easy fix to that would be to aim the sensors downwards towards the curvature of the pipe to achieve maximum return on the sensors.

Another feasible solution would be to have odometer on each of the wheel motors to be able to calculate the distance of each of the motors. Then with some distance calculations with the radius of the wheels, an alteration of course could be determined to correct the robot to travel back straight.

#### Final Conclusions

The current robot shield that we were using for testing had a three-axis gyroscope that provided digital values for angular accelerations of motion. This I was able to use to monitor for extreme changes in motion to calculate which side of the pipe the robot would possibly drive up. Then by applying a correction to direction can get the robot back to the bottom of the pipe.

#### Final Thoughts

By being able to use a gyroscope already built into the robot’s shield, provided a simple solution that could be accurate enough for the task as well as provide some more information than initially needed. The gyroscope allowed a very simple to check for when the robot would go up a wall on a turn or if it ran over some unknown object within the pipe. The robot already had the libraries available which made the Arduino code very simple to setup and prototype within a test area. For more information about this project, check out [AggiE-Challenge](http://engineering.tamu.edu/easa/areas/enrichment/aggie-challenge) ENGR 491–510.
