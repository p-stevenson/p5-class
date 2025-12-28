***

# Report: Internet Connectivity Assessment for Navan Auto Parts

**Assessment Title:** Internet Options in Ireland for a Home-Based Business
**Client:** Navan Auto Parts (navanautoparts.com)
**Location:** Navan, Co. Meath
**Date:** October 26, 2023

---

## 1. Investigation Findings

Before selecting a specific package, an analysis of the current Irish telecommunications landscape was conducted to establish the criteria for a suitable connection.

### 1.1 Range of Services Offered by ISPs
Modern Irish Internet Service Providers (ISPs) provide more than simple connectivity. For a business like Navan Auto Parts, the following value-added services are critical:
*   **Static IP Allocation:** Essential for self-hosting servers. Unlike residential lines where the IP address changes (Dynamic), a Static IP ensures the website domain always routes to the correct server.
*   **VoIP (Voice over IP):** Most providers (e.g., Eir, Vodafone) have phased out traditional copper landlines in favor of digital voice lines that run over the broadband connection.
*   **Failover Redundancy:** Services that include a 4G/5G mobile dongle that automatically takes over if the physical line is cut.

### 1.2 Available Connectivity Methods
*   **Fibre to the Cabinet (FTTC):** Uses copper for the last mile. Speeds max out at $100\text{ Mbps}$. *Verdict: Obsolete for this client due to slow upload speeds.*
*   **Cable (DOCSIS 3.0/3.1):** Provided largely by Virgin Media. Offers high download speeds but creates latency (lag) during peak times due to sharing bandwidth with neighbors.
*   **Fibre to the Home (FTTH):** Provided by SIRO and OpenEir networks. This runs fibre optic cables directly into the premises. It offers the highest speeds and reliability. Navan, Co. Meath is a "Gigabit Town" with strong FTTH coverage.
*   **Dedicated Internet Access (DIA):** A leased line solely for the business. Guaranteed speeds (e.g., $1\text{ Gb}$ up / $1\text{ Gb}$ down). *Verdict: Technically superior but likely cost-prohibitive for a startup.*

### 1.3 Security and Confidentiality
For a retailer self-hosting a website and storing customer data:
*   **DDoS Mitigation:** Since the website is hosted on-site, the connection needs protection against Distributed Denial of Service attacks.
*   **Firewall:** The router provided must allow "Port Forwarding" (to let web traffic in) while blocking malicious access to the internal office network.

---

## 2. Client Requirements Analysis

To recommend the correct package, we must translate the business practices of *Navan Auto Parts* into technical requirements (Key Performance Indicators).

| Business Activity | Technical Requirement | Reason |
| :--- | :--- | :--- |
| **Self-Hosting Website** | **High Upload Speed** | The server must *send* images/video to 1,000+ visitors daily. Standard home lines (20Mbps upload) will crash under this load. |
| **Local Web Server** | **Static IP** | Domain Name Systems (DNS) require a fixed address to locate the office server reliably. |
| **Online Retailer** | **Failover (4G Backup)** | If the internet breaks, the shop cannot process sales and the website goes offline. 100% uptime is a goal. |
| **10 Staff + Cloud Backups** | **High Bandwidth ($500\text{ Mbps}+$)** | 10 users + simultaneous video streaming + cloud uploading requires a wide "pipe" to prevent slowing down. |

---

## 3. Market Comparison (Real-World Options)

Based on availability in Navan, Co. Meath, three Business Broadband packages were evaluated.

### Option A: Vodafone Business Gigabit Fibre
*   **Provider:** Vodafone Ireland.
*   **Platform:** SIRO (Fibre to the Building).
*   **Speed:** $1,000\text{ Mbps}$ ($1\text{ Gb}$) Download / $200\text{ Mbps}$ Upload.
*   **Hardware:** Vodafone Gigabox Modem + "Always Connected" 4G Dongle.
*   **Static IP:** Available as an add-on.
*   **Contract:** 12 Months.

### Option B: Virgin Media Business 1Gb
*   **Provider:** Virgin Media.
*   **Platform:** HFC Cable / Fibre network.
*   **Speed:** $1,000\text{ Mbps}$ Download / $100\text{ Mbps}$ Upload.
*   **Hardware:** Hitron Business Router.
*   **Static IP:** Included in most business tiers.
*   **SLA:** 24-hour restore target.

### Option C: Digiweb Metro / Fibre Business
*   **Provider:** Digiweb (Irish-owned, utilizing SIRO network).
*   **Platform:** FTTH (Fibre to the Home).
*   **Speed:** $1,000\text{ Mbps}$ Download / $100\text{ Mbps}$ Upload.
*   **Hardware:** Fritz!Box Router (High configurability).
*   **Support:** Ireland-based business support.

---

## 4. Recommendations and Financials

### The Recommendation
After analyzing the three options, I recommend **Option A: Vodafone Business Gigabit Fibre** with the **Static IP Add-on**.

### Justification
1.  **Upload Speed:** The critical bottleneck for this client is serving HD video and photos from a local server. Vodafone (on the SIRO network) typically offers up to $200\text{ Mbps}$ upload on their Gigabit plan, whereas cable providers often cap uploads at $50\text{ Mbps}$ or $100\text{ Mbps}$.
2.  **Business Continuity (Failover):** Vodafone's "Always Connected" service specifically addresses the "failover" requirement in the brief. It includes a 4G dongle that sits in the router; if the fibre line is cut, the internet automatically switches to the Vodafone mobile network, keeping the card machines and website live.
3.  **Navan Availability:** Navan is a primary location for the SIRO network rollout, ensuring this specific connection is available at the premises.

### Cost Analysis (Year 1)
*Note: Prices are estimated based on current advertised business rates ex VAT.*

*   **Monthly Rental:** $€60.00$ (approx. for Business 1Gb).
*   **Static IP Add-on:** $€5.00$ per month.
*   **Installation:** Free on 12-month contract.

$$ \text{Total Monthly Cost} = €60.00 + €5.00 = €65.00 $$
$$ \text{Total Annual Cost (ex VAT)} = €65.00 \times 12 = €780.00 $$

This falls well within a standard operational budget for a business with 10 staff.

### Implementation & Suitability Check
*   **Video Usage:** With $1,000\text{ Mbps}$ download, 10 staff can easily watch 4K training streams simultaneously without buffering.
*   **Self-Hosting:** With $200\text{ Mbps}$ upload, the site can serve multiple concurrent users. *Note: If traffic grows significantly beyond 1,000 visits/day, the consultant advises moving the video hosting to a Cloud CDN (like AWS or Vimeo) to reduce load on the local office network.*

---

## 5. Bibliography

1.  **Commission for Communications Regulation (ComReg).** (2024). *Broadband Service Providers*. [comreg.ie](https://www.comreg.ie/advice-information/broadband-and-home-phone/types-of-broadband-technology/broadband-providers/)
2.  **Switcher.ie.** (2025). *Broadband providers in Ireland*. [switcher.ie](https://switcher.ie/broadband/providers/)
3.  **SIRO.** (2023). *SIRO Rollout Map - Meath*. [siro.ie]
4.  **Selectra.** (2023). *How to Choose the Best Broadband Provider in Ireland*. [selectra.ie](https://selectra.ie/broadband/providers)
5.  **Vodafone Ireland.** (2023). *Business Broadband & Fibre Specifications*. [vodafone.ie]

https://www.comreg.ie/advice-information/broadband-and-home-phone/types-of-broadband-technology/broadband-providers/

https://selectra.ie/broadband/providers

https://switcher.ie/broadband/complete-guide-to-broadband/

https://switcher.ie/broadband/providers/

https://www.comreg.ie/advice-information/broadband-and-home-phone/