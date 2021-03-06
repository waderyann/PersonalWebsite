float t;
final static int NUM_LINES = 126;

    void setup() {
      size(screenWidth,screenHeight);
      background(0);
    }

    void draw() {
      background(0.5);
      stroke(255);
      strokeWeight(5);
      fill(255);
      translate(width/2, height/2);
      //point(x(t),y(t));
      //point(x1(t),y1(t));
      //point(x2(t),y2(t));
      //line(x1(t),y1(t), x2(t),y2(t) );
      for (int i = 0; i < NUM_LINES; i++)
      {
        line(x1(t + i),y1(t + i), x2(t + i),y2(t + i), z2(t + i), z2(t + i) );
      }
      //rect(100, 100, x(t),y(t));
      //t++;
      t += 0.1;
      //rect(100, 100, 10, 10);
    }

    float x1 (float t)
    {
      //return cos(t) * screenWidth/2;
      return asin(t/10) * 300 + asin(t/5) * 20;
    }

    float y1 (float t)
    {
      //return sin(t / 10) * screenHeight/2;
      //return tan(t / 10) * 600;
      return cos(sqrt(t/2)) * 300 + log(t);
    }
    float x2 (float t)
    {
      //return cos(t) * screenWidth/2;
      return sin(t/10) * 600 + sin(t) * 2;
    }

    float y2 (float t)
    {
      //return sin(t / 10) * screenHeight/2;
      return cos(t / 20) * 600 + cos(t / 12) * 20;
    }

    float z1 (float t)
    {
      //return sin(t / 10) * screenHeight/2;
      return acos(t) + 300;
    }

    float z2 (float t)
    {
      //return sin(t / 10) * screenHeight/2;
      return acos(t) * 600;
    }
