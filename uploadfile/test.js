package fuzzytest;

import java.util.Scanner;

public class FuzzyTest {

    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Input number of data (N < 100) : ");
        int N = sc.nextInt();
        
        /*142 34 91 30 85 130 32 87 132 36 90 135 39 93 138 44
    94 139 46 96 145 48 99 148 51 101 149 55 104 152 58 106
    155 59 109 157 62 110 159 64 112 160 65 114 162 27 115 163*/
        
        System.out.println("Insert data : ");
        int [] x = new int [N];
        for(int i=0; i<N; i++)
        {
            x[i] = sc.nextInt();
        }
        double e = 2.71828;
        double m1 = 45 ;
        double m2 = 95;   
        double m3 = 145;   
        double m4 = 195;
        double sd1 = 3;     
        double sd2 = 3;   
        double sd3 = 3;   
        double sd4 = 3;
        double u1, u2, u3, u4 = 0;
        
        int n1 = 0;
        int n2 = 0;
        int n3 = 0;
        int n4 = 0;
        int [] G1 = new int [N];
        int [] G2 = new int [N];
        int [] G3 = new int [N];
        int [] G4 = new int [N];
        
        /*    int[] x = {142, 34, 91, 30, 85, 130, 32, 87, 132, 36, 90, 135, 39, 
                93, 138, 44, 94, 139, 46, 96, 145, 48, 99, 148, 51, 101, 149, 
                55, 104, 152, 58, 106, 155, 59, 109, 157, 62, 110, 159, 64, 112,
                160, 65, 114, 162, 27, 115, 163};  */
        
        System.out.println("Process Cluster Group");
        for(int i=0; i<N; i++)
        {
            u1 = Math.pow(2.71828,-(x[i]-m1)*(x[i]-m1) / (2.0*sd1*sd1));
            u2 = Math.pow(2.71828,-(x[i]-m2)*(x[i]-m2) / (2.0*sd2*sd2));
            u3 = Math.pow(2.71828,-(x[i]-m3)*(x[i]-m3) / (2.0*sd3*sd3));
            u4 = Math.pow(2.71828,-(x[i]-m4)*(x[i]-m4) / (2.0*sd4*sd4));
            
            if(u1>=u2 && u1>=u3 && u1>=u4)
            {
                G1[n1++] = x[i];
                
                if(n1==1)
                {
                    m1 = x[i];
                }
                else
                {
                    m1 = (m1*(n1-1)+x[i]) / (n1);
                    sd1 = Math.pow( (1-1/(n1-1))*sd1*sd1 + n1*((x[i]-m1)*(x[i]-m1)/(n1-1)/(n1-1)),0.5 );
                }
            }
            else if (u2>=u1 && u2>=u3 && u2>=u4)
            {
                G2[n2++] = x[i];
                
                if(n2==1)
                {
                    m2 = x[i];
                }
                else
                {
                    m2 = (m2*(n2-1)+x[i]) / (n2);
                    sd2 = Math.pow( (1-1/(n2-1))*sd2*sd2 + n2*((x[i]-m2)*(x[i]-m2)/(n2-1)/(n2-1)),0.5 );
                }
            }
            else if (u3>=u1 && u3>=u2 && u3>=u4)
            {
                G3[n3++] = x[i];
                
                if(n3==1)
                {
                    m3 = x[i];
                }
                else
                {
                    m3 = (m3*(n3-1)+x[i]) / (n3);
                    sd3 = Math.pow( (1-1/(n3-1))*sd3*sd3 + n3*((x[i]-m3)*(x[i]-m3)/(n3-1)/(n3-1)),0.5 );
                }
            }
            else
            {
                G4[n4++] = x[i];
                
                if(n4==1)
                {
                    m4 = x[i];
                }
                else
                {
                    m4 = (m4*(n4-1)+x[i]) / (n4);
                    sd4 = Math.pow( (1-1/(n4-1))*sd4*sd4 + n4*((x[i]-m4)*(x[i]-m4)/(n4-1)/(n4-1)),0.5 );
                }
            }  
        }
        
        if(n1==0)
        {
            System.out.println("No have data in Group 1");
        }
        else
        {
            System.out.println("Group 1 : Sd " + sd1 + ", Mean : " + m1);
            System.out.print("Data : ");
            for(int i=0; i<n1; i++)
            {
                System.out.print(G1[i] + " ");
            }
            System.out.println();
            System.out.println();
        }
        
        if(n2==0)
        {
            System.out.println("No have data in Group 2");
        }
        else
        {
            System.out.println("Group 2 : Sd " + sd2 + ", Mean : " + m2);
            System.out.print("Data : ");
            for(int i=0; i<n2; i++)
            {
                System.out.print(G2[i] + " ");
            }
            System.out.println();
            System.out.println();
        }
        
        if(n3==0)
        {
            System.out.println("No have data in Group 3");
        }
        else
        {
            System.out.println("Group 3 : Sd " + sd3 + ", Mean : " + m3);
            System.out.print("Data : ");
            for(int i=0; i<n3; i++)
            {
                System.out.print(G3[i] + " ");
            }
            System.out.println();
            System.out.println();
        }
        
        if(n4==0)
        {
            System.out.println("No have data in Group 4");
        }
        else
        {
            System.out.println("Group 4 : Sd " + sd4 + ", Mean : " + m4);
            System.out.print("Data : ");
            for(int i=0; i<n4; i++)
            {
                System.out.print(G4[i] + " ");
            }
            System.out.println();
            System.out.println();
        }
            
    }
    
}