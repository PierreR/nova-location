package irisnet.nova.location.client;

import chrriis.dj.nativeswing.swtimpl.components.JWebBrowser;

import javax.swing.*;
import java.awt.*;


public class SimpleExample extends JPanel {
    public SimpleExample() {
        super(new BorderLayout());

        JPanel webBrowserPanel = new JPanel(new BorderLayout());
        webBrowserPanel.setBorder(BorderFactory.createTitledBorder("Map front-end"));

        final JWebBrowser webBrowser = new JWebBrowser();
        webBrowser.navigate("http://localhost:8080/map.html");
        webBrowser.setMenuBarVisible(false);
        webBrowser.setLocationBarVisible(false);
        webBrowser.setBarsVisible(false);

        webBrowserPanel.add(webBrowser, BorderLayout.CENTER);
        add(webBrowserPanel, BorderLayout.CENTER);

    }
}
