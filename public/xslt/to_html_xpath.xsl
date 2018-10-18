<?xml version="1.0" encoding="UTF-8" ?>
<xsl:transform xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="xml"/>
    <xsl:preserve-space elements="*"/>

    <xsl:template match="/">
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="*">
      <div class="_element_" id="{@_id_xmlt_}">
        <span class="_open_tag_ _node_">
            <xsl:text>&lt;</xsl:text>
            <xsl:value-of select="name()"/>
            <xsl:apply-templates select="@*"/>
            <xsl:text>&gt;</xsl:text>
        </span>
        <xsl:apply-templates/>
        <span class="_close_tag_">
            <xsl:text>&lt;/</xsl:text>
            <xsl:value-of select="name()"/>
            <xsl:text>&gt;</xsl:text>
        </span>
      </div>
    </xsl:template>

    <xsl:template match="@*[not(contains(local-name(),'_id_xmlt'))]">
        <span class="_attribute_ _node_">
           <xsl:call-template name="idattrib"/>
            <xsl:text> </xsl:text>
            <span class="_attribute_name_">
                <xsl:value-of select="name()"/>
            </span>
            <span class="_attribute_equal">
                <xsl:text>=</xsl:text>
            </span>
            <span class="_attribute_quote">
                <xsl:text>"</xsl:text>
            </span>
            <xsl:value-of select="."/>
            <span class="_attribute_quote">
                <xsl:text>"</xsl:text>
            </span>
        </span>
    </xsl:template>

    <xsl:template match="@*"/>

    <xsl:template match="text()">
        <span id="{../@_id_xmlt-text}" class="_text_ _node_">
        <xsl:value-of select="translate(.,' ','&#xa0;')"/>
        </span>
    </xsl:template>

    <xsl:template match="comment()">
        <xsl:value-of select="."/>
    </xsl:template>


    <xsl:template name="idattrib">
        <xsl:variable name="attr">
            <xsl:text>_id_xmlt-attr_</xsl:text>
            <xsl:value-of select="local-name(.)"/>
        </xsl:variable>
        <xsl:attribute name="id">
            <xsl:value-of select="../@*[local-name() = $attr]"/>
        </xsl:attribute>
    </xsl:template>

</xsl:transform>
