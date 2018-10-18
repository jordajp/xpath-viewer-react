<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="*">
        <xsl:copy>
            <xsl:attribute name="_id_xmlt_">
                <xsl:value-of select="generate-id(.)"/>
            </xsl:attribute>
            <xsl:apply-templates select="@*" mode="generate-id"/>
            <xsl:apply-templates select="text()" mode="generate-id"/>
            <xsl:apply-templates select="@*"/>
            <xsl:apply-templates select="*|text()"/>
        </xsl:copy>
    </xsl:template>

    <xsl:template match="@*" mode="generate-id">
        <xsl:attribute name="_id_xmlt-attr_{local-name(.)}">
            <xsl:value-of select="generate-id(.)"/>
        </xsl:attribute>    
    </xsl:template>

    <xsl:template match="text()" mode="generate-id">
          <xsl:attribute name="_id_xmlt-text">
              <xsl:value-of select="generate-id(.)"/>
          </xsl:attribute>
    </xsl:template>

    <xsl:template match="@*">
        <xsl:copy>
            <xsl:apply-templates select="text()"/>
        </xsl:copy>
    </xsl:template>

</xsl:stylesheet>