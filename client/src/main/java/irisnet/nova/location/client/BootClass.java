package irisnet.nova.location.client;


import chrriis.common.UIUtils;
import chrriis.dj.nativeswing.swtimpl.NativeInterface;

import javax.swing.*;
import java.awt.*;


/**
 * Date: Nov 24, 2010
 */
public class BootClass {



    public static void main(String... args) {

        UIUtils.setPreferredLookAndFeel();
        NativeInterface.open();
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                JFrame frame = new JFrame("Nova Location Proof of Concept ");
                frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
                frame.getContentPane().add(new SimpleExample(), BorderLayout.CENTER);
                frame.setSize(440, 550);
                frame.setLocationByPlatform(true);
                frame.setVisible(true);
            }
        });
        NativeInterface.runEventPump();
    }

}
